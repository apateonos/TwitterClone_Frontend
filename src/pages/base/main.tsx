import { Header, Aside, Footer } from '../../containers/index';
import React from 'react';
interface props {
  components: React.ReactNode;
}
export default ( { components }: props ) => {
  return (
    <>
      <Header/>
      <div> Main Page </div>
      <div>{components}</div>
      <Aside/>
      <Footer/>
    </>
  )
}