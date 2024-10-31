const Header = ({ title }) => {
  return (
    <header className="bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-extralight text-slate-200">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
