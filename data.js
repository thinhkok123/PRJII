// Mock data for classes
export const INITIAL_CLASSES = [
    { 
        id: 'OFF001', 
        name: 'IELTS Breakthrough', 
        type: 'Offline', 
        level: 'B2', 
        price: '5,000,000', 
        students: 18, 
        max: 30, 
        min: 20, 
        room: 'Phòng 302', 
        schedule: 'T2-T4-T6 (18:00)' 
    },
    { 
        id: 'OFF002', 
        name: 'TOEIC Mastery', 
        type: 'Offline', 
        level: 'B1', 
        price: '3,500,000', 
        students: 31, 
        max: 30, 
        min: 20, 
        room: 'Phòng 101', 
        schedule: 'T3-T5-T7 (19:30)' 
    },
    { 
        id: 'ONL001', 
        name: 'Business English Online', 
        type: 'Online', 
        level: 'C1', 
        price: '4,000,000', 
        students: 12, 
        max: 20, 
        min: 10, 
        room: 'Zoom ID: 888...', 
        schedule: 'T7-CN (09:00)' 
    },
    { 
        id: 'ONL002', 
        name: 'Giao tiếp Cơ bản', 
        type: 'Online', 
        level: 'A2', 
        price: '2,500,000', 
        students: 8, 
        max: 20, 
        min: 10, 
        room: 'Google Meet', 
        schedule: 'T3-T5 (20:00)' 
    },
];

// Mock data for students
export const INITIAL_STUDENTS = [
    { 
        id: 'HV001', 
        name: 'Nguyễn Văn A', 
        classId: 'OFF001', 
        levelResult: 'B2', 
        paid: true, 
        email: 'vana@gmail.com', 
        phone: '0901234567' 
    },
    { 
        id: 'HV002', 
        name: 'Trần Thị B', 
        classId: 'ONL001', 
        levelResult: 'C1', 
        paid: true, 
        email: 'thib@gmail.com', 
        phone: '0907654321' 
    },
    { 
        id: 'HV003', 
        name: 'Lê Văn C', 
        classId: 'OFF002', 
        levelResult: 'B1', 
        paid: true, 
        email: 'vanc@gmail.com', 
        phone: '0901122334' 
    },
];
