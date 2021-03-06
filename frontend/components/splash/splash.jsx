import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import SearchBar from '../search/searchbar';
import SearchIcons from '../search/search_icons';
import BusinessCategoriesContainer from './business_categories_container';
import BusinessByCityContainer from './business_by_city_container';
import FeaturedBusinessesContainer from './featured_businesses_container';
import BusinessByCategoryContainer from './business_by_category_container';
import Footer from './footer';
import Copyright from './copyright';
import SocialMedia from './social_media';


class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.businesses.length == []) {
            this.props.fetchBusinesses()
        }
        // const currentUser = Object.assign({}, this.props.currentUser);

        // if (currentUser.state === "" && currentUser.city === "") {
        //     
        //     // let response = await fetch(`http://ZiptasticAPI.com/${currentUser.zipcode}`)
        //     // //     .then((resp) => resp.json()) // Transform the data into json
        //     // //     .then(function (data) {
        //     // //         
        //     // //         // Create and append the li's to the ul
        //     // //     })
        //     // // };
        //     // 
        //     // let commits = await response.json()
        //     async function cityAndState() {
        //         currentUser
        //         let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
        //         let response = await fetch(url);
    
        //         let commits = await response.json(); // read response body and parse as JSON
    
        //         alert(commits[0].author.login);

        //     }
        // }
    }

    //     return $.ajax({
    //     method: 'GET',
    //     url: `http://ZiptasticAPI.com/${currentUser.zipcode}`,
    //     dataType: 'json',
    //     success: function (result) {
    //         const updatedUser =  Object.assign(currentUser, result);
    //     },
    //     complete: function (data) {
    //     }
    // }
    // )
    componentDidUpdate(prevProps) {
        if (this.props.businesses.length < 3) {
            this.props.fetchBusinesses();
        }
    }
    
    render() {
        return(
            <div>
            <div className="splash-parent">
                    <div className="wrap-me">
                    <GreetingContainer />
                    <div className="logo-wrapper">
                    <img src={window.logo} />
                    </div>
                    <SearchBar />
                    <br/>
                    <SearchIcons businesses={this.props.businesses}/>
                    </div>
                    <br/>
            </div>
                    <BusinessCategoriesContainer />
                    <BusinessByCityContainer />
                    <FeaturedBusinessesContainer businesses={this.props.businesses}/>
                    <BusinessByCategoryContainer />
                    <SocialMedia />
                    <Footer />
                    <Copyright />
            </div>
        )
    }
}

export default Splash;