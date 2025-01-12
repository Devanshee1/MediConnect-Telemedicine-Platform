import { useEffect, useState } from "react";
import { FindDoctorSearch } from "../HomePage/FindDoctorSearch";
import { DoctorCard } from "./DoctorCard";
import './SearchDoctor.css';
import { useSearchParams } from 'react-router-dom';
import doctor1 from './doc1.png';
import doctor2 from './doc2.png';
export const SearchDoctor = () => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);

    // Rule-based fallback data
    const fallbackDoctors = {
        dermatologist: [
            {
                name: "Dr. Priya Mehta",
                speciality: "dermatologist",
                experience: 8,
                location: "delhi",
                clinic: "Skin Glow Clinic",
                consultationFees: 700,
                profilePic: doctor1
            },
            {
                name: "Dr. Vivek Singh",
                speciality: "dermatologist",
                experience: 12,
                location: "delhi",
                clinic: "Flawless Skin Center",
                consultationFees: 850,
                profilePic: doctor2
            },
            {
                name: "Dr. Kiran Shah",
                speciality: "dermatologist",
                experience: 9,
                location: "mumbai",
                clinic: "Clear Skin Clinic",
                consultationFees: 750,
                profilePic: doctor2
            },
            {
                name: "Dr. Sneha Roy",
                speciality: "dermatologist",
                experience: 6,
                location: "indore",
                clinic: "Youthful Skin Clinic",
                consultationFees: 650,
                profilePic: doctor1
            }
        ],
        gynecologist: [
            {
                name: "Dr. Rajesh Gupta",
                speciality: "gynecologist",
                experience: 15,
                location: "indore",
                clinic: "Heart Care Clinic",
                consultationFees: 1000,
                profilePic: doctor2
            },
            {
                name: "Dr. Anjali Sharma",
                speciality: "gynecologist",
                experience: 10,
                location: "delhi",
                clinic: "Healthy Heart Hospital",
                consultationFees: 900,
                profilePic: doctor1
            },
            {
                name: "Dr. Neeta Verma",
                speciality: "gynecologist",
                experience: 11,
                location: "mumbai",
                clinic: "Women Care Center",
                consultationFees: 950,
                profilePic: doctor1
            }
        ],
        generalphysician: [
            {
                name: "Dr. Amit Sharma",
                speciality: "generalphysician",
                experience: 20,
                location: "mumbai",
                clinic: "Brain Wellness Center",
                consultationFees: 1100,
                profilePic: doctor2
            },
            {
                name: "Dr. Meena Rai",
                speciality: "generalphysician",
                experience: 13,
                location: "delhi",
                clinic: "Neuro Care Clinic",
                consultationFees: 950,
                profilePic: doctor1
            },
            {
                name: "Dr. Alok Bansal",
                speciality: "generalphysician",
                experience: 16,
                location: "indore",
                clinic: "Community Health Clinic",
                consultationFees: 900,
                profilePic: doctor2
            }
        ],
        homeopath: [
            {
                name: "Dr. Rahul Verma",
                speciality: "homeopath",
                experience: 18,
                location: "delhi",
                clinic: "Joint Health Clinic",
                consultationFees: 850,
                profilePic: doctor2
            },
            {
                name: "Dr. Sunita Kapoor",
                speciality: "homeopath",
                experience: 14,
                location: "mumbai",
                clinic: "Bone & Joint Care",
                consultationFees: 900,
                profilePic: doctor1
            },
            {
                name: "Dr. Vishal Tandon",
                speciality: "homeopath",
                experience: 10,
                location: "indore",
                clinic: "Natural Remedies Clinic",
                consultationFees: 800,
                profilePic: doctor2
            }
        ],
        ayurveda: [
            {
                name: "Dr. Neha Bhardwaj",
                speciality: "ayurveda",
                experience: 10,
                location: "indore",
                clinic: "Happy Kids Clinic",
                consultationFees: 600,
                profilePic: doctor1
            },
            {
                name: "Dr. Rohan Kumar",
                speciality: "ayurveda",
                experience: 7,
                location: "mumbai",
                clinic: "Little Hearts Hospital",
                consultationFees: 650,
                profilePic: doctor2
            },
            {
                name: "Dr. Ruchi Jain",
                speciality: "ayurveda",
                experience: 12,
                location: "delhi",
                clinic: "Holistic Wellness Center",
                consultationFees: 700,
                profilePic: doctor1
            }
        ]
    };
    
    
    const fetchDoctors = () => {
        const speciality = searchParams.get('speciality')?.toLowerCase() || ""; // Ensure lowercase for matching
        const location = searchParams.get('location')?.toLowerCase();          // Ensure lowercase for matching
    
        // Get fallback data for the speciality if it exists
        const fallbackData = fallbackDoctors[speciality] || [];
    
        // If location is specified, filter doctors by location
        const filteredDoctors = fallbackData.filter(
            doctor => 
                (!location || doctor.location.toLowerCase() === location) && 
                doctor.speciality.toLowerCase() === speciality
        );
    
        setDoctors(filteredDoctors);
    };
    
    

    useEffect(() => {
        fetchDoctors();
    }, [searchParams]);

    return (
        <div className="searchpage-container">
            <FindDoctorSearch />
            <div className="search-results-container">
                {doctors.length === 0 ? (
                    <h2>
                        No doctors available in {searchParams.get('location') || "the specified location"} for{" "}
                        {searchParams.get('speciality') || "the selected speciality"}.
                    </h2>
                ) : (
                    <>
                        <h2>{doctors.length} doctors available in {searchParams.get('location')}</h2>
                        <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                        {doctors.map(doctor => <DoctorCard {...doctor} key={doctor.name} />)}
                    </>
                )}
            </div>
        </div>
    );
};
