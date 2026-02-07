function UserProfile() {
  const name = "John Clark";
  const bio = "Software engineer passionate about creating web development applications.";
  const profileImage =
    "https://unsplash.com/photos/a-close-up-of-a-person-wearing-a-suit-and-tie-2EGjR6v0LhU";

  return (
    <div
      style={{
        maxWidth: "350px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "16px",
          border: "4px solid #e1e5e9",
        }}
      />
      <h1 style={{ fontSize: "22px", marginBottom: "8px" }}>{name}</h1>
      <p style={{ fontSize: "15px", color: "#555" }}>{bio}</p>
    </div>
  );
}

export default UserProfile;