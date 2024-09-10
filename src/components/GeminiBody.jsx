"use client";

import Copyright from "@/components/Copyright";

import React, { useContext } from "react";
import {
  CircleUserRound,
  SendHorizontal,
} from "lucide-react";
import { Context } from "@/context/ContextProvider";

const GeminiBody = () => {
  const {
    submit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="flex items-center justify-between p-5 text-xl text-gray-400 mb-3">
        <p>Gemini @ Goraya</p>
        <CircleUserRound size={40} className="text-softTextColor" />
      </div>
      <div className="max-w-[900px] m-auto">
        {!displayResult ? (
          <>
            {/* Center the placeholder in the middle of the page */}
            <div className="flex flex-col h-[60vh]">
              <div className="my-2 p-5 text-center">
                <p>
                  <span className="font-bold font-medium text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Hi, It's Naeem Goraya
                  </span>
                </p>
                <br /><br />
                <p className="text-center font-normal">We offer you access to the Gemini Model through this platform. This project is built using Next.js and allows you to interact with the Gemini Model for free. A free API key is utilized to enable seamless use of the model for your needs.</p>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="my-2 flex items-center text-center">
              <CircleUserRound size={40} className="text-softTextColor" />
              <p>{recentPrompts}</p>
            </div>
            <div className="flex items-start gap-5">
              <img src="/gemini.png" alt="" />
              <p
                className="text-md font-normal loading-6 text-gray-400"
                dangerouslySetInnerHTML={{ __html: result }}
              ></p>
            </div>
          </div>
        )}
        <div className="w-full max-w-[900px] px-5">
          <form action={submit}>
            <div className="flex items-center bg-bgSecondaryColor py-2.5 px-5 rounded-full">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                className="flex-1 bg-transparent border-none outline-none p-2 text-sm text-gray-400"
                placeholder="Hi... It's Naeem Goraya. How can I help you today? Enter your query here....."
              />
              <div className="flex cursor-pointer">
                <SendHorizontal type="submit" size={20} />
              </div>
            </div>
          </form>
          <p className="text-gray-400 text-sm text-center p-3">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
<Copyright />
    </div>
  );
};

export default GeminiBody;
