import React from 'react';
import {useRouter} from 'next/router';

const Header = () => {
  const router = useRouter();
  return(
    <div 
    onClick = {() => router.push('/')}
    class="header">
      <h1>Eunoia Mia</h1>
    </div>
  );
}

export default Header;