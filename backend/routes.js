const express = require('express');
const router = express.Router();
const { User, Appointment, Department, JobApplication, Payment, MedicalRecord, HospitalVisit, Donor, DoctorSchedule, HospitalLocation } = require('./models');

// Home route
router.get('/', (req, res) => {
    res.send('Welcome to the Hospital Management System API');
});

// Users Routes
router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

// Appointments Routes
router.get('/appointments', async (req, res) => {
    const appointments = await Appointment.findAll();
    res.json(appointments);
});

router.post('/appointments', async (req, res) => {
    const appointment = await Appointment.create(req.body);
    res.json(appointment);
});

// Departments Routes
router.get('/departments', async (req, res) => {
    const departments = await Department.findAll();
    res.json(departments);
});

router.post('/departments', async (req, res) => {
    const department = await Department.create(req.body);
    res.json(department);
});

// Job Applications Routes
router.get('/job-applications', async (req, res) => {
    const applications = await JobApplication.findAll();
    res.json(applications);
});

router.post('/job-applications', async (req, res) => {
    const application = await JobApplication.create(req.body);
    res.json(application);
});

// Payments Routes
router.get('/payments', async (req, res) => {
    const payments = await Payment.findAll();
    res.json(payments);
});

router.post('/payments', async (req, res) => {
    const payment = await Payment.create(req.body);
    res.json(payment);
});

// Hospital Visits Routes
router.get('/hospital-visits', async (req, res) => {
    const visits = await HospitalVisit.findAll();
    res.json(visits);
});

router.post('/hospital-visits', async (req, res) => {
    const visit = await HospitalVisit.create(req.body);
    res.json(visit);
});

// Donors Routes
router.get('/donors', async (req, res) => {
    const donors = await Donor.findAll();
    res.json(donors);
});

router.post('/donors', async (req, res) => {
    const donor = await Donor.create(req.body);
    res.json(donor);
});

// Doctor Schedules Routes
router.get('/doctor-schedules', async (req, res) => {
    const schedules = await DoctorSchedule.findAll();
    res.json(schedules);
});

router.post('/doctor-schedules', async (req, res) => {
    const schedule = await DoctorSchedule.create(req.body);
    res.json(schedule);
});

// Hospital Locations Routes
router.get('/hospital-locations', async (req, res) => {
    const locations = await HospitalLocation.findAll();
    res.json(locations);
});

router.post('/hospital-locations', async (req, res) => {
    const location = await HospitalLocation.create(req.body);
    res.json(location);
});

module.exports = router;
