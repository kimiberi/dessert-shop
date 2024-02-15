import Image from 'next/image';
import { Nunito } from 'next/font/google';
import { Button, Card, Flex, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import HeadingPage from '../../components/heading/page';

const nunito = Nunito({
  weight: ['900', '700'],
  subsets: ['latin'],
});

const img_pancake = '/images/pancake.webp';

export default function Home() {
  return (
    <main className="mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
      <HeadingPage />

      <div className="bg-gradient-to-r from-purple-900 to-violet-200 text-center text-white py-10 sm:py-36">
        <h2 className={`text-3xl md:text-6xl ${nunito.className}`}>
          Look for it here
        </h2>
        <Input
          size="large"
          placeholder="state, city or town"
          prefix={<SearchOutlined />}
          className="w-2/3 sm:w-2/6 mt-3"
        />
      </div>

      <div className="p-10">
        <Card
          hoverable
          style={{ width: 240, height: 'auto' }}
          cover={
            <Image src={img_pancake} width={500} height={500} alt="Pancake" />
          }
        >
          <p className="text-sm sm:text-base">Pancake with Sliced Strawberry</p>
        </Card>
      </div>
    </main>
  );
}
