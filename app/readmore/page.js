import React from 'react';

function page() {
  return (
    <div className='bg-gray-900 min-h-screen p-6'>
      <header className='mb-8'>
        <h1 className='text-4xl text-white mb-4'>Tutorial Title</h1>
        <p className='text-lg text-gray-300'>This is a brief description of what the tutorial covers.</p>
      </header>
      <main className='space-y-6'>
        <section className='bg-gray-800 p-6 rounded-lg'>
          <h2 className='text-2xl text-white mb-2'>Step 1: Introduction</h2>
          <p className='text-gray-300'>Explain the first step in detail here.</p>
        </section>
        <section className='bg-gray-800 p-6 rounded-lg'>
          <h2 className='text-2xl text-white mb-2'>Step 2: Setup</h2>
          <p className='text-gray-300'>Explain the second step in detail here.</p>
        </section>
        <section className='bg-gray-800 p-6 rounded-lg'>
          <h2 className='text-2xl text-white mb-2'>Step 3: Implementation</h2>
          <p className='text-gray-300'>Explain the third step in detail here.</p>
        </section>
        <section className='bg-gray-800 p-6 rounded-lg'>
          <h2 className='text-2xl text-white mb-2'>Step 4: Conclusion</h2>
          <p className='text-gray-300'>Summarize the tutorial and provide any final thoughts.</p>
        </section>
      </main>
    </div>
  );
}

export default page;
