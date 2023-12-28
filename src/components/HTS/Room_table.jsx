import React, { useState } from 'react';
import { connect } from 'react-redux';
function RoomTable({ rooms, darkMode }) {
  const [selectedRooms, setSelectedRooms] = useState({});

  const handleRoomTypeChange = (roomType, value) => {
    setSelectedRooms((prevRooms) => {
      const updatedRooms = { ...prevRooms };
      updatedRooms[roomType] = value;
      return updatedRooms;
    });
  };

  const handleGuestsChange = (roomType, value) => {
    setSelectedRooms((prevRooms) => {
      const updatedRooms = { ...prevRooms };
      updatedRooms[roomType] = {
        ...updatedRooms[roomType],
        numberOfGuests: value,
      };
      return updatedRooms;
    });
  };

  const handleReservation = (roomType, reservationType) => {
    const { roomNumber, numberOfGuests } = selectedRooms[roomType] || { roomNumber: '', numberOfGuests: 0 };

    // Add validation for the number of guests based on room type
    let isValidReservation = true;
    switch (roomType) {
      case 'deluxe':
        isValidReservation = numberOfGuests <= 2;
        break;
      case 'family':
        isValidReservation = numberOfGuests <= 4;
        break;
      case 'suite':
        isValidReservation = numberOfGuests <= 3;
        break;
      default:
        isValidReservation = true; // Allow reservations for other room types
    }

    if (isValidReservation) {
      alert(`Room Type: ${roomType}, Room Number: ${roomNumber}, Guests: ${numberOfGuests}, Reservation Type: ${reservationType}`);
      // Implement your reservation logic here
    } else {
      alert(`Invalid number of guests for ${roomType} room type`);
      // You can customize the alert message based on your needs
    }
  };

  return (
    <div>
      <h2>Available Rooms</h2>
      <table className={`table ${darkMode ? "dark" : ""}`}>
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Number of Guests</th>
            <th>Price per Night</th>
            <th>Select Room</th>
            <th>Reservation Type</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>
                <h3>{room.roomType}</h3>
                {room.description && (
                  <p>
                    <strong>Description:</strong>
                    <ul>
                      {room.description.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </p>
                )}
              </td>
              <td>
                <input
                  className="room"
                  type="number"
                  name={`guests_${room.roomType}`}
                  placeholder="0"
                  onChange={(e) => handleGuestsChange(room.roomType, e.target.value)}
                />
              </td>
              <td>{room.pricePerNight}</td>
              <td>
                <select
                  className="room-type"
                  name={`room_${room.roomType}`}
                  value={selectedRooms[room.roomType]?.roomNumber || ''}
                  onChange={(e) => handleRoomTypeChange(room.roomType, { ...selectedRooms[room.roomType], roomNumber: e.target.value })}
                >
                  <option value="">Select Room</option>
                  {room.availableRooms.map((roomNumber) => (
                    <option key={roomNumber} value={roomNumber}>
                      Room {roomNumber}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button className='table_btn' onClick={() => handleReservation(room.roomType, 'Reserve')}>Reserve</button>
                <br />
                <br />
                <button  className='table_btn' onClick={() => handleReservation(room.roomType, 'Reserve and Pay')}>Reserve and Pay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
});
export default connect(mapStateToProps)(RoomTable);