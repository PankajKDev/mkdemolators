import { owner } from "../constants/data";
const ProfileComponent = () => {

    return (
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                <img 
                    src={owner.picture} 
                    alt={`${owner.name}'s profile`} 
                    className="w-full h-auto max-h-[500px] rounded-lg object-cover"
                />
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800">{owner.name}</h2>
                <p className="mt-2 text-gray-600 whitespace-pre-line">{owner.description}</p>
                <div className="mt-4">
                    <p className="text-gray-700"><strong>Projects Finished:</strong> {owner.totalProjects}</p>
                    <p className="text-gray-700"><strong>Active Since:</strong> {owner.workingSince}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;
