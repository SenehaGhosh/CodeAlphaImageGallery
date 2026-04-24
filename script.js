body {
  font-family: Arial;
  background: #111;
  color: white;
  text-align: center;
}

/* FILTER BUTTONS */
.filters {
  margin: 20px;
}

.filters button {
  padding: 8px 15px;
  margin: 5px;
  border: none;
  background: #333;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.3s;
}

.filters button:hover {
  background: orange;
}

/* GALLERY */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  padding: 20px;
}

.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.4s, filter 0.4s;
}

.gallery img:hover {
  transform: scale(1.05);
  filter: brightness(80%);
}

/* LIGHTBOX */
.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.lightbox img {
  width: 80%;
  border-radius: 10px;
  margin-bottom: 20px;
}

.controls {
  display: flex;
  gap: 20px;
}

.controls button {
  padding: 10px 20px;
  border: none;
  background: orange;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 30px;
  cursor: pointer;
}