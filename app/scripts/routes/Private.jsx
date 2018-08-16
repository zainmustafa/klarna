import React from "react";
import Movie from "components/Movie";
import data from "../utils/data.json";


export default class Private extends React.PureComponent {
    render() {
        return (
            <div key="Private" className="app__private app__route">
                <div className="app__container">
                    <h2>MOVIES</h2>
                    <div className="list__container">
                        {data.movies.map((item, index) => <Movie key={index} movie={item} />)}
                    </div>
                </div>
            </div>
        );
    }
}
