import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { app } from "@lib/firebase";
import toast from "react-simple-toasts";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";

const RegisterPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<any>();

    const password = useRef({});
    password.current = watch("password", "");

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-12 mb-12">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Image
                        src="/images/grinda_logo_primary.png"
                        alt="Workflow"
                        width={50}
                        height={50}
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        회원가입
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form
                            className="space-y-4"
                            onSubmit={handleSubmit(async (data) => {
                                try {
                                    const auth = getAuth(app);
                                    const credential =
                                        await createUserWithEmailAndPassword(
                                            auth,
                                            data.email,
                                            data.password
                                        );
                                    const { user } = credential;
                                    await axios.post("/api/users", {
                                        email: data.email,
                                        firebaseId: user.uid,
                                        name: data.name,
                                    });

                                    toast("가입을 완료하였습니다.");
                                    router.replace("/");
                                } catch (e) {
                                    console.log(e);
                                    toast("다시 시도해주세요.");
                                }
                            })}
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    이름
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        {...register("name", {
                                            required: "필수 입력 사항입니다.",
                                        })}
                                        type="text"
                                        autoComplete="name"
                                        placeholder="이름을 입력해주세요"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                    />
                                    <p className="error mb-4">
                                        {errors.name?.message}
                                    </p>
                                </div>
                            </div>
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
                                        {...register("email", {
                                            required: "필수 입력 사항입니다",
                                        })}
                                        type="email"
                                        autoComplete="email"
                                        placeholder="이메일을 입력해주세요"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                    />
                                    <p className="error mb-4">
                                        {errors.email?.message}
                                    </p>
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
                                            required: "필수 입력 사항입니다.",
                                            minLength: {
                                                value: 8,
                                                message:
                                                    "8자 이상 입력해주세요.",
                                            },
                                        })}
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                    />
                                    <p className="error mb-4">
                                        {errors.password?.message}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    비밀번호 확인
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password_repeat"
                                        name="password_repeat"
                                        type="password"
                                        {...register("password_repeat", {
                                            validate: (value) =>
                                                value === password.current ||
                                                "비밀번호가 일치하지 않습니다.",
                                        })}
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  {
                    <p className="error mb-4">
                      {errors.password_repeat?.message}
                    </p>
                  }
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
              </div> */}

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                >
                                    회원가입
                                </button>
                            </div>
                            <div>
                                <Link href="/users/login">
                                    <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                                        로그인
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

export default RegisterPage;
