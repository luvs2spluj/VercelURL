export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-6 max-w-7xl mx-auto">
      <header className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">TinyCommune</h1>
        <p className="text-lg text-gray-600">Connect, Fund, and Build Tiny House Communities Together</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Land Search Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Find Available Land</h2>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Enter location..." 
              className="w-full p-2 border rounded"
            />
            <div className="flex gap-2">
              <select className="p-2 border rounded">
                <option>Price Range</option>
                <option>$0 - $50,000</option>
                <option>$50,000 - $100,000</option>
                <option>$100,000+</option>
              </select>
              <select className="p-2 border rounded">
                <option>Acreage</option>
                <option>1-5 acres</option>
                <option>5-10 acres</option>
                <option>10+ acres</option>
              </select>
            </div>
          </div>
        </div>

        {/* Community Funding Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Group Funding</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Current Projects</span>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Start New Project
              </button>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium">Mountain View Commune</h3>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Progress: 65%</span>
                <span>15 Contributors</span>
              </div>
              <div className="w-full bg-gray-200 rounded h-2 mt-2">
                <div className="bg-green-500 h-2 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Matching Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold mb-4">Find Your Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded p-4">
            <h3 className="font-medium">Sustainable Living Group</h3>
            <p className="text-sm text-gray-600">8 members • Portland, OR</p>
            <button className="mt-2 text-blue-500">Connect</button>
          </div>
          <div className="border rounded p-4">
            <h3 className="font-medium">Off-Grid Enthusiasts</h3>
            <p className="text-sm text-gray-600">12 members • Austin, TX</p>
            <button className="mt-2 text-blue-500">Connect</button>
          </div>
          <div className="border rounded p-4">
            <h3 className="font-medium">Eco Village Builders</h3>
            <p className="text-sm text-gray-600">5 members • Asheville, NC</p>
            <button className="mt-2 text-blue-500">Connect</button>
          </div>
        </div>
      </section>

      {/* Crypto Integration Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Crypto Funding Options</h2>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 border rounded px-4 py-2">
            <span>Connect ETH Wallet</span>
          </button>
          <button className="flex items-center gap-2 border rounded px-4 py-2">
            <span>Connect Solana Wallet</span>
          </button>
        </div>
      </section>
    </main>
  );
}
