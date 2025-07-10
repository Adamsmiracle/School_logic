"use client"


const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className='flex items-center justify-between'>
        <h1 className='tex-xl font-bold'>Announcements</h1>
        <span className='text-xs text-gray-400'>View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkylight rounded-md p-4">
          <div className="flex items-center justify-between"> 
            <h2 className="font-medium">This is a random header</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md p-1 ">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita facere provident enim,</p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between"> 
            <h2 className="font-medium">This is a random header</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md p-1 ">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita facere provident enim,</p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between"> 
            <h2 className="font-medium">This is a random header</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md p-1 ">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita facere provident enim,</p>
        </div>
      </div>
      
    </div>
  )
}

export default Announcements
