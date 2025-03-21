
export default function Contact () {

    const config = {
        email : 'jeevitha.shakthi.05@gmail.com',
        phone: '+45456565656'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-black'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl  mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>Feel free to connect.</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}