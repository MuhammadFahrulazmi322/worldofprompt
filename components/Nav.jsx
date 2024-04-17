"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="w-full flex-between mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="logo_text">World Of Prompt</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? 
        <div className="flex gap-3 md:gap-5 ">
            <Link
            href="/create-prompt"
            className="black_btn"
            >
                Create Post
            </Link>
            <button 
                type="button" onClick={signOut}
                className="outline_btn">
                SignOut
            </button>
        </div> : <></>}
      </div>
    </nav>
  );
};

export default Nav;
