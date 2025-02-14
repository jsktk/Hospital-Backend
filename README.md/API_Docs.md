//SIGNUP:
{
  "name": "Quame",
  "email": "Quame@hospital.com",
  "password": "password123",
  "role": "Patient"
}

{
  "message": "User registered successfully",
  "userId": "uuid"
}


//LOGIN:
{
  "email": "Quame@example.com",
  "password": "password123"
}
//Response:
{
  "token": "jwt_token"
}


//Doctor–Patient Assignment
{
  "patientId": "uuid",
  "doctorId": "uuid"
}
//Response:
{
  "message": "Doctor assigned successfully"
}

//Doctor Patient List:
{
  "patients": [
    { "id": "uuid", "name": "Quame" }
  ]
}

//Doctor Patient List:
{
  "patients": [
    { "id": "uuid", "name": "Quame" }
  ]
}


//Doctor Notes & Actionable Steps

{
  "patientId": "uuid",
  "doctorId": "uuid",
  "note": "Patient needs to take medication daily."
}
//Response:
{
  "message": "Note submitted successfully",
  "actionableSteps": {
    "checklist": ["Buy medication"],
    "plan": ["Take medication daily for 7 days"]
  }
}

//Retrieve Actionable Steps:
{
  "checklist": ["Buy medication"],
  "plan": ["Take medication daily for 7 days"]
}