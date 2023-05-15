import React, {useState, useEffect} from "react";



//create your first component
const Home = () => {

	const [element, setElement] = useState("");
	const [listItems, setListItems] = useState([]); 
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const handleChange = (event) =>{
		setElement(event.target.value);
	};
	

	const handelClick = () => {
		if (element !== '') {
			setListItems([...listItems, element]);
			setElement('');
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			setListItems([...listItems, element]);
			setElement('');
		}
	};

	const handleMouseEnter = (index) => {
		setHoveredIndex(index);
	};

	const handleMouseLeave = () => {
		setHoveredIndex (null);
	};

	const handleDelete = (index) => {
		const updatedListItems = [...listItems];
		updatedListItems.splice(index, 1);
		setListItems(updatedListItems);
	  };

	  fetch('http://assets.breatheco.de/apis/fake/todos/user/carlosgarciare2')
	  .then(Response => )
	
	return (
		<div className="container">
			<h1 className="title">TO DO LIST</h1>
			<div className="caja">
				<div class="input-group mb-3">
  					<input type="text" class="form-control" placeholder="Write here your tasks" aria-label="Recipient's username" aria-describedby="button-addon2" onKeyDown={handleKeyPress} onChange={handleChange} value={element} />
  					<button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handelClick}>Add</button>
				</div>
				<ol class="list-group list-group-numbered lista">
				{listItems.map((item, index) => (
          			<li key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}
					>
					{item}
					{hoveredIndex === index && (
						<button onClick={ () => handleDelete(index)} className="cruz">X</button>
					)}
					</li>
        			))}
				</ol>
				<p className="tasks">{listItems.length} tasks left</p>
			</div>
		</div>
	);
};

export default Home;