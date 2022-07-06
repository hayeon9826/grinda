import Link from "next/link";
import Image from "next/image";

export const EditorIntro = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src="https://img.freepik.com/free-vector/group-people-working-together_52683-28615.jpg?w=1380&t=st=1657125812~exp=1657126412~hmac=47ce3ef08f3a94baed949bd21d0524d96b3c75f406e2fc47069b3c9f7da273f9" 
      width={280} 
      height={200} 
      alt="fix image" />
      <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl mt-4">
        나만의 웹사이트를 빠르게 제작해보세요.
      </h6>
      <p className="mb-1 text-center text-gray-500">
        왼쪽 사이드바에서 원하는 컴포넌트를 선택해 웹사이트를 제작해보세요.
      </p>
      <p className="mb-8 text-center text-gray-500">
        수많은 사용자들이 만든 멋진 템플릿을 이용할 수 있습니다.
      </p>
      <button className="px-6 py-2 text-sm font-semibold text-primary-800 bg-primary-100">
        <Link href="/">템플릿 둘러보기</Link>
      </button>
    </div>
  )
};