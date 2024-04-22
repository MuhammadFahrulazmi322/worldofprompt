"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, settoggleDropdown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
        const response = await getProviders();
        setProviders(response);
    }
    setUpProviders();
  }, []);

  return (
    <nav className="w-full flex-between mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={37}
          height={37}
          className="object-contain"
        />
        <p className="logo_text">World Of Prompt</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? 
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
                Sign out
            </button>

            <Link href="/profile">
                <Image
                src={session?.user?.image}
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
                />
            </Link>
        </div> : (
          <>
          {providers && Object.values(providers).map((provider) => (
            //image logo google
            <button
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="black_btn flex flex-row gap-2 items-center"
           >
            <Image
              src="/assets/icons/logo-google.svg"
              alt="logo"
              width={24}
              height={24}
              className="object-contain"
            />
             Sign in
           </button>
          ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
          {session?.user ? (
            <div className="flex gap-3">
              <Image
          src={session?.user?.image}
          alt="logo"
          width={37}
          height={37}
          className="rounded-full"
          onClick={() => settoggleDropdown((prev) => !prev)}
        />
        {toggleDropdown && (
          <div className="dropdown">
            <Link 
            href="/profile"
            className="dropdown_link"
            onClick={() => settoggleDropdown(false)}
            >
                My Profile
            </Link>
             <Link 
            href="/create-prompt"
            className="dropdown_link"
            onClick={() => settoggleDropdown(false)}
            >
                Create Prompt
            </Link>
            <button
              type="button"
              onClick={() => {
                settoggleDropdown(false);
                signOut();
              }}
              className="mt-5 w-full black_btn"
            >
              Sign out
            </button>
          </div>
        )}
            </div>
          ): (
            <>
          {providers && Object.values(providers).map((provider) => (
           <button
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="black_btn flex flex-row gap-2 items-center"
           >
            <Image
              src="/assets/icons/logo-google.svg"
              alt="logo"
              width={24}
              height={24}
              className="object-contain"
            />
            Sign in
           </button>
          ))}
          </>
          )}
      </div>
    </nav>
  );
};

export default Nav;
