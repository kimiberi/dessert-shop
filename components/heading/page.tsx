import React from 'react';
import { Nunito } from 'next/font/google';
import { Button, Card, Flex, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const nunito = Nunito({
  weight: ['900', '700'],
  subsets: ['latin'],
});

const HeadingPage = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center p-3">
      <p className={`text-2xl sm:text-4xl ${nunito.className}`}>OpenTable</p>
      <Flex gap="small" wrap="wrap">
        <Button className="primary-button">Login</Button>
        <Button>Sign Up</Button>
      </Flex>
    </div>
  );
};

export default HeadingPage;
