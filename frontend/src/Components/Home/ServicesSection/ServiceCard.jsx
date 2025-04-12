const ServiceCard = () => {
    return (
        <div className=" flex flex-col gap-y-3 border overflow-hidden  rounded-xl shadow-xl transition-all duration-1000 hover:scale-[1.04] hover:shadow-2xl">
            <div className="w-full h-[20rem]  border-b">
                <img
                    className="w-full h-full object-cover "
                    src="https://previews.123rf.com/images/kos911/kos9111907/kos911190700096/127683961-concept-d-apprentissage-des-langues-%C3%A9trang%C3%A8res-%C3%A9ducation-atelier-de-langues-%C3%A9trang%C3%A8res-groupe-d.jpg"
                    alt=""
                />
            </div>
            <div className="flex flex-col gap-y-3 p-2">
                <h1 className="text-sm  font-semibold tracking-[2px] font-A bg-gradient-to-tr from-blueColor  text-transparent bg-clip-text">Apprentissage du Langue</h1>
                <p className="text-sm tracking-wider font-D text-blackColor">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium laborum molestiae labore, non nulla nihil
                    numquam tempore. Repudiandae ducimus qui ipsa, beatae neque
                    voluptatum ex quisquam perferendis, et, in accusamus...
                </p> 
<button className="bg-blueColor transition-all hover:bg-orangeColor  h-10 flex justify-center items-center text-xl tracking-wider uppercase font-B rounded-xl text-white">Lire Plus</button>
            </div>
        </div>
    );
};
export default ServiceCard;
