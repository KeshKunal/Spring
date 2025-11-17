import Rating from '@mui/material/Rating';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function Card() {
  return (
    <ThemeProvider theme={theme}>
      <div className='flex flex-wrap justify-evenly bg-[#e6e7ed] shadow-lg rounded-3xl mx-4 sm:mx-10 lg:mx-20 my-10 sm:my-10 p-6'>
        <div className='w-full sm:w-auto flex justify-center'>
          <img src="/Therapist/c1.svg" alt="therapist" className='my-4 sm:my-14' />
        </div>
        <img src="/Therapist/line.svg" alt="line" className='hidden lg:block' />
        <div className='w-full sm:w-auto mt-4 sm:mt-0 text-center sm:text-left'>
          <div className='text-2xl sm:text-4xl font-medium'>Dr. John Doe</div>
          <img src="/Therapist/line2.svg" alt="line" className='mt-3 sm:mt-6 mx-auto sm:mx-0' />

          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='scale-125 sm:scale-150 mx-auto sm:mx-7 mt-3 sm:mt-5' />

          <div className='text-xl sm:text-2xl mt-3 sm:mt-5'>clinical psychologist (PhD)</div>

          <div className='text-lg sm:text-xl my-2'>11-15 years of experience.</div>

          <div className='text-lg sm:text-xl flex justify-center sm:justify-start items-center mt-6 sm:mt-10'>
            <svg width="28" height="40" viewBox="0 0 29 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 0C6.49509 0 0 5.90382 0 13.1786C0 24.8929 14.5 41 14.5 41C14.5 41 29 24.8929 29 13.1786C29 5.90382 22.5049 0 14.5 0ZM14.5 20.5C13.3529 20.5 12.2315 20.1565 11.2777 19.5129C10.3239 18.8693 9.58049 17.9545 9.1415 16.8843C8.70251 15.814 8.58765 14.6364 8.81145 13.5002C9.03524 12.364 9.58764 11.3204 10.3988 10.5012C11.2099 9.6821 12.2434 9.12426 13.3685 8.89826C14.4936 8.67226 15.6598 8.78825 16.7196 9.23156C17.7794 9.67488 18.6852 10.4256 19.3225 11.3888C19.9598 12.352 20.3 13.4844 20.3 14.6429C20.2983 16.1957 19.6867 17.6846 18.5994 18.7826C17.512 19.8807 16.0377 20.4983 14.5 20.5Z" fill="#444444" />
            </svg><span className='pl-3'>Dwarka, Delhi</span>
          </div>

          <div className='text-lg sm:text-2xl mt-4 sm:mt-6'>
            ₹1500 consultation fee
            <button className="ml-4 sm:ml-10 px-4 py-2 sm:px-7 sm:py-2 text-lg sm:text-2xl bg-[#AAA6B9] text-white rounded-full hover:bg-[#e0dfdc] hover:text-black transition duration-300">
              Book Session
            </button>
          </div>
          <div className='mt-14 bg-[#8c96ed] p-3 rounded-xl text-xl text-white'>
          Currently we are working on collaborating with the best therapists for you 🌟. 
          <div className='mt-3'>Till then you can enjoy other features on Spring 🌿</div>
          </div>
        </div>
        
      </div>
    </ThemeProvider>

  )
}

export default Card;
