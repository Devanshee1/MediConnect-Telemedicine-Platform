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
                speciality: "Dermatology",
                experience: 8,
                location: "delhi",
                clinic: "Skin Glow Clinic",
                consultationFees: 700,
                profilePic: doctor1
            },
            {
                name: "Dr. Vivek Singh",
                speciality: "Dermatology",
                experience: 12,
                location: "Delhi",
                clinic: "Flawless Skin Center",
                consultationFees: 850,
                profilePic: doctor2
            }
        ],
        Gynecologist: [
            {
                name: "Dr. Rajesh Gupta",
                speciality: "Gynecology",
                experience: 15,
                location: "delhi",
                clinic: "Heart Care Clinic",
                consultationFees: 1000,
                profilePic: doctor2
            },
            {
                name: "Dr. Anjali Sharma",
                speciality: "Gynecology",
                experience: 10,
                location: "delhi",
                clinic: "Healthy Heart Hospital",
                consultationFees: 900,
                profilePic: doctor1
            }
        ],
        GeneralPhysician: [
            {
                name: "Dr. Amit Sharma",
                speciality: "General Physician",
                experience: 20,
                location: "delhi",
                clinic: "Brain Wellness Center",
                consultationFees: 1100,
                profilePic: "https://via.placeholder.com/150"
            },
            {
                name: "Dr. Meena Rai",
                speciality: "General Physician",
                experience: 13,
                location: "delhi",
                clinic: "Neuro Care Clinic",
                consultationFees: 950,
                profilePic: "https://via.placeholder.com/150"
            }
        ],
        Homeopath: [
            {
                name: "Dr. Rahul Verma",
                speciality: "Homepath",
                experience: 18,
                location: "Delhi",
                clinic: "Joint Health Clinic",
                consultationFees: 850,
                profilePic: "https://via.placeholder.com/150"
            },
            {
                name: "Dr. Sunita Kapoor",
                speciality: "Orthopedics",
                experience: 14,
                location: "Delhi",
                clinic: "Bone & Joint Care",
                consultationFees: 900,
                profilePic: "https://via.placeholder.com/150"
            }
        ],
        Ayurveda: [
            {
                name: "Dr. Neha Bhardwaj",
                speciality: "Pediatrics",
                experience: 10,
                location: "Chennai",
                clinic: "Happy Kids Clinic",
                consultationFees: 600,
                profilePic: "https://via.placeholder.com/150"
            },
            {
                name: "Dr. Rohan Kumar",
                speciality: "Pediatrics",
                experience: 7,
                location: "Chennai",
                clinic: "Little Hearts Hospital",
                consultationFees: 650,
                profilePic: "https://via.placeholder.com/150"
            }
        ],
        
    };
    
    const fetchDoctors = () => {
        const speciality = searchParams.get('speciality')?.toLowerCase() || ""; // Ensure lowercase for matching
        const location = searchParams.get('location')?.toLowerCase();    // Ensure lowercase for matching
    
        // Get fallback data for the speciality if it exists
        const fallbackData = fallbackDoctors[speciality] || [];
    
        // If location is specified, filter doctors by location
        const filteredDoctors = location
            ? fallbackData.filter(doctor => doctor.location.toLowerCase() === location)
            : fallbackData; // Show all doctors if no location is specified
    
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
