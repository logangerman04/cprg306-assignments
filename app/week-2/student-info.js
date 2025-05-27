'use client';  

import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Logan German</p>
      <p>
        <Link href="https://github.com/logangerman04/cprg306-assignments" target="_blank" rel="noopener noreferrer">
          https://github.com
        </Link>
      </p>
    </div>
  );
}

