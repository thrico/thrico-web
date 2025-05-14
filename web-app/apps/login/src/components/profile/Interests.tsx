"use client";

import type React from "react";
import { useState } from "react";
import { Form, Button, Select, Flex, Space, Card } from "antd";

import { fetchCategories } from "@/lib/api";
import { fetchSkillSuggestions } from "@/lib/skills";

interface SkillOption {
    value: string;
    category?: string;
}

interface SkillFormProps {
    categories: string[];
    skills: string[];
    setSkills: (skills: string[]) => void;
    setCategories: (categories: string[]) => void;
    setCurrent: (step: number) => void;
    loading: boolean;
    submit: () => void;// Added loading property
}

export const SkillForm: React.FC<SkillFormProps> = ({ categories, skills, setCategories, setSkills, setCurrent, loading, submit }) => {
    const [form] = Form.useForm();
    const [options, setOptions] = useState<SkillOption[]>([]);
    const [skillOptions, setSkillOptions] = useState<SkillOption[]>([]);
    const [loadingData, setLoading] = useState(false);

    const onSearch = async (searchText: string) => {


        try {
            const suggestions = await fetchCategories(searchText);
            setOptions(suggestions.map((skill) => ({ value: skill, label: skill })));
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        } finally {
            setLoading(false);
        }
    };

    const onFinish = async (values: any) => {

        await setSkills(values.skills)
        await setCategories(values.categories)
        await submit()



    };

    return (
        <Form style={{ width: "100%" }} form={form} layout="vertical" onFinish={onFinish}>

            <Card>
                <Form.Item

                    initialValue={categories}
                    name="categories"
                    label="Categories*"
                    rules={[
                        { required: true, message: "Please select at least one category" },
                    ]}
                    style={{ marginTop: 16 }}
                >
                    <Select
                        loading={loadingData}
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="Please Select Category"
                        onSearch={onSearch}
                        options={options}
                    />
                </Form.Item>

                <Form.Item
                    initialValue={skills}
                    name="skills"
                    label="Skills*"
                    rules={[
                        { required: true, message: "Please select at least one skill" },
                    ]}
                    style={{ marginTop: 16 }}
                >
                    <Select
                        loading={loadingData}
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="Please Select Skills"
                        onSearch={async (searchText) => {
                            if (!searchText || searchText.length < 2) {
                                const suggestions = await fetchSkillSuggestions(searchText);
                                setSkillOptions(
                                    suggestions.map((skill) => ({ value: skill, label: skill }))
                                );
                            }
                            setLoading(true);
                            try {
                                const skillSuggestions = await fetchSkillSuggestions(searchText);
                                setSkillOptions(
                                    skillSuggestions.map((skill) => ({
                                        value: skill,
                                        label: skill,
                                    }))
                                );
                            } catch (error) {
                                console.error("Error fetching skill suggestions:", error);
                            } finally {
                                setLoading(false);
                            }
                        }}
                        options={skillOptions}
                    />
                </Form.Item>

            </Card>
            <Flex
                style={{ width: "100%", marginTop: 29 }}
                justify="center"
                align="center"
            >
                <Space>
                    <Button onClick={() => setCurrent(3)}>Previous</Button>

                    <Button loading={loading} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Space>
            </Flex>
        </Form>
    );
};
