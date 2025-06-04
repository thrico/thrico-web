import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { $generateHtmlFromNodes } from "@lexical/html";
import { createEditor } from "lexical";
import { useOrganization } from "../checkOrgainzation/context/OrganizationContext";

const AgreementDrawer: React.FC = () => {
  const { settings } = useOrganization();
  const [open, setOpen] = useState(false);
  const [html, setHtml] = useState<string | null>(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const convertLexicalJsonToHtml = () => {
      if (!settings?.termAndConditionsMembers) return;

      try {
        const editor = createEditor();
        const editorState = editor.parseEditorState(
          settings.termAndConditionsMembers
        );

        editor.setEditorState(editorState);
        editorState.read(() => {
          const generatedHtml = $generateHtmlFromNodes(editor);
          setHtml(generatedHtml);
        });
      } catch (err) {
        console.error("Error converting Lexical JSON to HTML:", err);
        setHtml("<p>Invalid terms format.</p>");
      }
    };

    if (open) {
      convertLexicalJsonToHtml();
    }
  }, [open, settings?.termAndConditionsMembers]);

  return (
    <>
      <a onClick={showDrawer} style={{ cursor: "pointer" }}>
        View Agreement
      </a>

      <Drawer
        title="Terms and Conditions"
        width={720}
        onClose={onClose}
        open={open}
      >
        {html ? (
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        ) : (
          <p>Loading terms...</p>
        )}
      </Drawer>
    </>
  );
};

export default AgreementDrawer;
