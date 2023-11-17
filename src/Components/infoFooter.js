import React, {useState, useEffect} from 'react'

const InfoFooter = () => {
    const [isColumn, setIsColumn] = useState(false);

    const handleResize = () => {
        setIsColumn(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // <div className={`flex ${isColumn ? 'flex-col' : 'flex-row'}`}>

    return (
        <div className="flex flex-col md:flex-row justify-center ">
            <div className="w-full md:w-1/3 p-4 bg-gray-200 flex items-center">
                <img src="https://source.unsplash.com/random" alt="Subcontainer 1" className="w-16 h-16 mr-4" />
                <div>
                    <h2 className="text-lg font-semibold">Subcontainer 1 Title</h2>
                    <p className="text-gray-600">Subcontainer 1 Subtitle</p>
                </div>
            </div>
            <div className="w-full md:w-1/3 p-4 bg-gray-300 flex items-center">
                <img src="https://source.unsplash.com/random" alt="Subcontainer 1" className="w-16 h-16 mr-4" />
                <div>
                    <h2 className="text-lg font-semibold">Subcontainer 1 Title</h2>
                    <p className="text-gray-600">Subcontainer 1 Subtitle</p>
                </div>
            </div>
            <div className="w-full md:w-1/3 p-4 bg-gray-400 flex items-center">
                <img src="https://source.unsplash.com/random" alt="Subcontainer 1" className="w-16 h-16 mr-4" />
                <div>
                    <h2 className="text-lg font-semibold">Subcontainer 1 Title</h2>
                    <p className="text-gray-600">Subcontainer 1 Subtitle</p>
                </div>
            </div>
        </div>
    );
}

export default InfoFooter