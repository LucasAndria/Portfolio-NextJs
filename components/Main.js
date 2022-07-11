function Main({ smallText, lang }) {

    const greeting = lang === 'fr' ? (
        <div>Salut, mon nom est <span className="text-[#5651e5]">Lucas</span></div>) : (
        <div>Hi, I'm <span className="text-[#5651e5]">Lucas</span></div>)

    const brefPresentation = lang === 'fr' ? (
        <div>Un Développeur Web Junior</div>) : (
        <div>A Junior web developer</div>)

    const presentation = lang === 'fr' ? (
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic maiores cumque eius sed consectetur mollitia adipisci tempore modi vero? Molestias iusto eius officiis rem, illum perferendis soluta perspiciatis nam! Itaque.</div>) : (
        <div>Lorem ipsum mais en english dolor sit amet consectetur, adipisicing elit. Hic maiores cumque eius sed consectetur mollitia adipisci tempore modi vero? Molestias iusto eius officiis rem, illum perferendis soluta perspiciatis nam! Itaque.</div>)

    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        {smallText}
                    </p>
                    <h2 className="py-4 text-gray-700">{greeting}</h2>
                    <h2 className="py-4 text-gray-700">{brefPresentation}</h2>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        {presentation}
                    </p>
                    <div>ETO ISIKA IZAO</div>
                </div>
            </div>
        </div>
    )
}

export default Main
