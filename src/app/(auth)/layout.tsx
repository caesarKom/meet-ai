const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:px-10">
      <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
    </div>
  );
};

export default AuthLayout;
