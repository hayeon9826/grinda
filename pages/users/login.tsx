import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { app } from "@lib/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { authErrorMessage } from "@lib/frontend";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<any>();
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mx-auto">
            <div className="text-center w-full h-full object-center object-cover lg:w-full lg:h-full relative">
              <Image
                src="/images/grinda_logo_primary.png"
                alt="Grinda logo"
                width="100"
                height="38"
                className="w-full margin-auto"
              />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            로그인
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={handleSubmit(async (data) => {
                try {
                  const auth = getAuth(app);
                  await signInWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                  );
                  router.replace("/");
                  toast.success("로그인에 성공했습니다", {
                    autoClose: 1000,
                  });
                } catch (error) {
                  console.log(error);
                  toast.error(t(authErrorMessage(error?.code)), {
                    autoClose: 1000,
                  });
                }
              })}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  이메일
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    {...register("email", {
                      required: "필수 입력 사항입니다",
                    })}
                    placeholder="이메일을 입력해주세요"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  <p className="error mb-4">{errors.email?.message}</p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  비밀번호
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    {...register("password", {
                      required: "필수 입력 사항입니다",
                    })}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  <p className="error mb-4">{errors.password?.message}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    로그인 정보 기억하기
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:text-primary-500"
                  >
                    비밀번호를 잃어버리셨나요?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  로그인
                </button>
              </div>
              <div>
                <Link href="/users/register" passHref>
                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                    회원가입
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
