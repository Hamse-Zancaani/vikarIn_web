'use client'
import Image from 'next/image'
import { portfolioData } from '@/app/api/data'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <section className='pt-12' id='portfolio'>
      <div className='container px-4 sm:px-6'>
        <div className='grid lg:grid-cols-2 items-center gap-20'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='lg:-ml-32'>
            <Image
              src='/images/portfolio/img-portfolio.png'
              alt='Crypto Portfolio'
              width={780}
              height={700}
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <div className='flex flex-col gap-4'>
              <p className='text-white font-medium'>
            We offer a flexible but educational and   <span className='text-primary'>rewarding student job</span>
              </p>
              <h2 className='text-white sm:text-40 text-30 mb-4 font-medium'>
       Become a temporary worker at Vikarin!
              </h2>
            </div>
            <p className='text-muted/60 text-18'>
            Vikarin offers a job for those of you who are studying a health education and who would like a flexible but educational and rewarding student job.
            </p>

            <table className='w-full sm:w-[80%] mt-10'>
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr key={index} className='border-b border-dark_border/10'>
                    <td className='py-5'>
                      <div className='bg-primary/20 p-3 rounded-full w-fit'>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={24}
                          height={24}
                        />
                      </div>
                    </td>
                    <td className='py-5'>
                      <h4 className='text-muted text-xl ml-5'>
                        {item.title}
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
