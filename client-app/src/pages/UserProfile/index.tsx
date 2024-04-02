import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../../components/Container';
import { selectUser, user as USER } from '../../redux/userSlice';
import { updateUser } from '../../services/UserService';

const UserProfile = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profilePicture: '',
        bio: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                profilePicture: `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&&size=128`,
                bio: user.bio,
            });
        }
    }, [user]);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await updateUser(user.id, formData);
            if (response?.data) {
                if (response?.status === 200) {
                    let data = response.data.data;
                    dispatch(USER({ ...user, firstName: data.firstName, lastName: data.lastName, bio: data.bio }));
                    setEditMode(false);
                    setError('');
                }
            } else {
                setError(response?.data.message);
            }
        } catch (err) {
            setError('Failed to update profile. Please try again later.');
        }
        setLoading(false);
    };

    return (
        <Container>
            <div className="flex flex-wrap md:flex-nowrap gap-10 mt-10 p-5 bg-white rounded shadow">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                    <img
                        src={formData.profilePicture}
                        alt="Profile"
                        className="w-40 h-40 object-cover rounded-full border-2 border-gray-300"
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
                    {error && <div className="text-red-500">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-md font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                disabled={!editMode}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-md font-medium text-gray-700">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                disabled={!editMode}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="bio" className="block text-md font-medium text-gray-700">Bio</label>
                            <textarea
                                name="bio"
                                id="bio"
                                value={formData.bio}
                                onChange={handleInputChange}
                                disabled={!editMode}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-md font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={true}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-not-allowed"
                            />
                        </div>
                        {editMode ? (
                            <div className="flex justify-between">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
                                    disabled={loading}
                                >
                                    {loading ? 'Updating...' : 'Update Profile'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditMode(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setEditMode(true)}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Edit Profile
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default UserProfile;
