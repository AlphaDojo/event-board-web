import React from 'react';
import defaultThumbNail from 'assets/thumbnail.png';

const styleClasses = {
  mainSectionContainer: `
    grid
    md:grid-cols-2
    lg:gap-12
    rounded
    mb-4
    lg:mb-16
    bg-white
    grid-cols-none
    text-center
    lg:text-left
  `,
  imageContainer: 'col-span-1',
  eventTypePillbox: 'inline-block mb-4 bg-pink-300 pl-2 pr-2 text-center rounded text-xl font-medium',
  infoTextSection: 'bg-white p-6 border-slate-300 border-solid border rounded mb-6',
}

function ReviewEventMainSection({ evt, editEvent }) {
  const imageUrl = evt.imageFile || defaultThumbNail;
  return (
    <div className={styleClasses.mainSectionContainer}>
      <div className={styleClasses.imageContainer}>
        <img src={imageUrl} className="w-full" alt="logo" />
      </div>

      <div className="col-span-1">
        <div className="pt-4">
          <div className="grid grid-cols-2">
            <div className={styleClasses.eventTypePillbox}>
              { evt.eventType }
            </div>

            {editEvent && (<div className="float-right text-right">
              <button className="p-1 text-white rounded mb-2 mr-2" onClick={editEvent}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="black"
                >
                  <path
                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>)}
          </div>

          <h1 className="font-bold text-3xl mb-4">
            { evt.title }
          </h1>

          <h2 className="mb-2">{ evt.organizationName }</h2>

          <div className="mb-4">
            <span className="mr-2">Twitter</span>
            <span className="mr-2">Facebook</span>
            <span className="mr-2">LinkedIn</span>
          </div>

          <button className="bg-blue-500 text-white p-2 rounded w-1/3">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewEventMainSection;
