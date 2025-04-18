import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';
import AddImage from './AddImage';
import AddVideo from './AddVideo';

const Add = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add
            </Button>
            <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Space>
                    <AddImage />
                    <AddVideo />
                </Space>
            </Modal>
        </>
    );
};

export default Add;