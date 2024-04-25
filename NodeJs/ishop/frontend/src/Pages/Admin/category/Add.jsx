import React, { useRef } from 'react'
import Card from '../../../Components/Admin/Card';
import { Link } from 'react-router-dom';

export default function Add() {
  const slugRef = useRef();

  const titleToSlug = (title) => {
    const slug = title.toLowerCase().trim().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
    // console.log(slug);
    slugRef.current.value = slug;
  }

  return (
    <Card>
      <div>
        <Link to={"/admin"}>Dashboard</Link> / <Link to={"/admin/category"}>category</Link> / add
      </div>
      <hr className='my-2' />

      <div>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => titleToSlug(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="slug" className="block text-gray-700 font-bold mb-2">
              Slug:
            </label>
            <input
              ref={slugRef}
              type="text"
              id="slug"
              name="slug"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              readOnly

            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    </Card>
  )
}
