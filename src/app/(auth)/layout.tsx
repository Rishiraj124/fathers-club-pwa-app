const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='tw-flex-center tw-min-h-screen tw-w-full tw-bg-primary-50 tw-bg-dotted-pattern tw-bg-cover tw-bg-fixed tw-bg-center'>
      {children}
    </div>
  );
};
export default Layout;
