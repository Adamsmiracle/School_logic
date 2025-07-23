"use client"

import { ITEM_PER_PAGE } from '@/lib/settings'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import React from 'react'

const Pagination = ({page, count}: {page: number, count:number}) => {

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const changePage = (newPage:number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", newPage.toString())
    router.push(`${pathname}?${params}`)
  }

  const hasPrev = page > 1
  const hasNext = page < Math.ceil(count / ITEM_PER_PAGE)

  return (
    <div className='p-4 flex justify-between text-gray-500'>
       <button 
         disabled={!hasPrev} 
         onClick={() => changePage(page - 1)}
         className='py-2 px-4 rounded-md bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-300'
       >
         Prev
       </button>
    <div className='flex items-center gap-2 text-sm'>

      {Array.from({length:Math.ceil(count / ITEM_PER_PAGE)}, (_, index)=>{
        const pageIndex = index + 1;
        return (
          <button 
            key={pageIndex} 
            onClick={() => changePage(pageIndex)}
            className={`px-2 py-1 rounded-sm hover:bg-slate-200 ${page === pageIndex ? "bg-lamaSky text-white" : ""}`}
          >
            {pageIndex}
          </button>
        );
      })
      }

      </div>
      <button 
        disabled={!hasNext}
        onClick={() => changePage(page + 1)}
        className='py-2 px-4 rounded-md bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-300'
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
