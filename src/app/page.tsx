'use client';

import Head from 'next/head';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-background'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <button className='btn btn-primary'>Test Button</button>
          <button className='btn btn-secondary m-4'>
            Secondary Color Button
          </button>
          <button className='btn btn-accent'>Accent Button</button>
          <h1 className='p-2 text-white'>Test Text</h1>
          <p className='p-2 text-white'>Test Paragraph</p>
          <footer className='text-secondary absolute bottom-2'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://github.com/sergiulache'>
              Batrinac Sergiu
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
