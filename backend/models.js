const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config(); // Load .env file

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_NAME, // Path to the SQLite database file
  logging: console.log, // Show SQL queries in console
});

const User = sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    full_name: { type: DataTypes.STRING, allowNull: false },
    image : { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    phone: { type: DataTypes.STRING(15), allowNull: false },
    password_hash: { type: DataTypes.STRING, allowNull: false },
    user_type: { type: DataTypes.ENUM('admin', 'doctor', 'patient', 'staff'), allowNull: false },
    department_id: { type: DataTypes.INTEGER },
    language_preference: { type: DataTypes.ENUM('EN', 'ES', 'FR', 'DE') },
    date_of_birth: { type: DataTypes.DATE },
    gender: { type: DataTypes.ENUM('Male', 'Female', 'Other') },
    address: { type: DataTypes.TEXT },
    created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

const Appointment = sequelize.define('Appointment', {
    appointment_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    patient_id: { type: DataTypes.INTEGER, allowNull: false },
    doctor_id: { type: DataTypes.INTEGER, allowNull: false },
    appointment_date: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.ENUM('Scheduled', 'Completed', 'Canceled') },
    google_calendar_event_id: { type: DataTypes.STRING },
    symptoms: { type: DataTypes.TEXT },
    created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

const Department = sequelize.define('Department', {
    department_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    department_name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT }
});

const JobApplication = sequelize.define('JobApplication', {
    application_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    full_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING(15), allowNull: false },
    position_applied: { type: DataTypes.STRING },
    resume_link: { type: DataTypes.TEXT },
    application_status: { type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected') },
    applied_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

const Payment = sequelize.define('Payment', {
    payment_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    patient_id: { type: DataTypes.INTEGER, allowNull: false },
    visit_id: { type: DataTypes.INTEGER },
    amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    payment_date: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    payment_status: { type: DataTypes.ENUM('Pending', 'Completed', 'Failed') },
    payment_method: { type: DataTypes.ENUM('Cash', 'Card', 'Insurance') }
});

const MedicalRecord = sequelize.define('MedicalRecord', {
    record_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    patient_id: { type: DataTypes.INTEGER, allowNull: false },
    visit_id: { type: DataTypes.INTEGER },
    test_results: { type: DataTypes.TEXT },
    test_pdf: { type: DataTypes.BLOB('long') }, // Storing PDF as BLOB
    prescription: { type: DataTypes.BLOB('long') }, // Storing PDF as BLOB
    last_updated: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});


const HospitalVisit = sequelize.define('HospitalVisit', {
    visit_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    patient_id: { type: DataTypes.INTEGER, allowNull: false },
    doctor_id: { type: DataTypes.INTEGER, allowNull: false },
    visit_date: { type: DataTypes.DATE, allowNull: false },
    diagnosis: { type: DataTypes.TEXT },
    prescription: { type: DataTypes.TEXT },
    notes: { type: DataTypes.TEXT }
});

const Donor = sequelize.define('Donor', {
    donor_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    full_name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING(15), allowNull: false },
    blood_type: { type: DataTypes.ENUM('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-') },
    organ_donor: { type: DataTypes.BOOLEAN, defaultValue: false },
    last_donation_date: { type: DataTypes.DATE },
    created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

const DoctorSchedule = sequelize.define('DoctorSchedule', {
    schedule_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    doctor_id: { type: DataTypes.INTEGER, allowNull: false },
    available_day: { type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') },
    start_time: { type: DataTypes.TIME, allowNull: false },
    end_time: { type: DataTypes.TIME, allowNull: false }
});

const HospitalLocation = sequelize.define('HospitalLocation', {
    location_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    hospital_name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.TEXT },
    latitude: { type: DataTypes.DECIMAL(10,8) },
    longitude: { type: DataTypes.DECIMAL(11,8) }
});

const Prediction = sequelize.define('Prediction', {
    prediction_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'user_id' } },
    symptoms: { type: DataTypes.TEXT, allowNull: false },
    predicted_disease: { type: DataTypes.STRING, allowNull: false },
    confidence_score: { type: DataTypes.DECIMAL(5, 2), allowNull: false },
    model_used: { type: DataTypes.STRING, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

const Disease = sequelize.define('Disease', {
    disease_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    disease_name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    common_symptoms: { type: DataTypes.TEXT, allowNull: true },
    risk_factors: { type: DataTypes.TEXT, allowNull: true },
    recommended_tests: { type: DataTypes.TEXT, allowNull: true },
    created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

const SymptomLog = sequelize.define('SymptomLog', {
    log_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'user_id' } },
    symptoms: { type: DataTypes.TEXT, allowNull: false },
    reported_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

const ChatbotInteraction = sequelize.define('ChatbotInteraction', {
    interaction_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: true, references: { model: User, key: 'user_id' } },
    message: { type: DataTypes.TEXT, allowNull: false },
    response: { type: DataTypes.TEXT, allowNull: false },
    timestamp: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

const ChatbotTrainingData = sequelize.define('ChatbotTrainingData', {
    entry_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_input: { type: DataTypes.TEXT, allowNull: false },
    expected_response: { type: DataTypes.TEXT, allowNull: false },
    intent_category: { type: DataTypes.STRING, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

// Define associations
User.hasMany(Prediction, { foreignKey: 'user_id' });
Prediction.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(SymptomLog, { foreignKey: 'user_id' });
SymptomLog.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(ChatbotInteraction, { foreignKey: 'user_id' });
ChatbotInteraction.belongsTo(User, { foreignKey: 'user_id' });


// Associations
Department.belongsTo(User, { as: 'Admin', foreignKey: 'user_id' });
User.hasMany(Appointment, { foreignKey: 'patient_id' });
User.hasMany(Appointment, { foreignKey: 'doctor_id' });
User.hasMany(HospitalVisit, { foreignKey: 'patient_id' });
User.hasMany(HospitalVisit, { foreignKey: 'doctor_id' });
User.hasMany(MedicalRecord, { foreignKey: 'patient_id' });
User.hasMany(Payment, { foreignKey: 'patient_id' });
User.hasMany(Donor, { foreignKey: 'user_id' });
User.hasMany(DoctorSchedule, { foreignKey: 'doctor_id' });
User.hasMany(Prediction, { foreignKey: 'user_id' });
User.hasMany(SymptomLog, { foreignKey: 'user_id' });
User.hasMany(ChatbotInteraction, { foreignKey: 'user_id' });
User.hasMany(JobApplication, { foreignKey: 'user_id' });
Appointment.belongsTo(User, { as: 'Patient', foreignKey: 'patient_id' });
Appointment.belongsTo(User, { as: 'Doctor', foreignKey: 'doctor_id' });
HospitalVisit.belongsTo(User, { as: 'Patient', foreignKey: 'patient_id' });
HospitalVisit.belongsTo(User, { as: 'Doctor', foreignKey: 'doctor_id' });
Payment.belongsTo(HospitalVisit, { foreignKey: 'visit_id' });

sequelize.authenticate()
  .then(() => console.log('✅ Database connected successfully!'))
  .catch(err => console.error('❌ Error connecting to database:', err));

sequelize.sync()
  .then(() => {
    console.log('✅ Database tables created successfully!');
  })
  .catch(err => {
    console.error('❌ Error creating database tables:', err);
  });

module.exports = {

    sequelize,
    User,
    Appointment,
    Department,
    JobApplication,
    Payment,
    MedicalRecord,
    HospitalVisit,
    Donor,
    DoctorSchedule,
    HospitalLocation
};
