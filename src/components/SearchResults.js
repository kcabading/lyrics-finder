import React, {Component} from 'react'
import Divider from 'material-ui/Divider'
import SongListItem from './SongListItem.js'
import ArtistListItem from './SongListItem.js'
import AlbumListItem from './SongListItem.js'
import {connect} from 'react-redux';
import {fetchDefault} from '../reducers/search-results'


class SearchResults extends Component {

    componentDidMount() {

        this.props.fetchDefault()
    }

    render() {
        console.log("rendering results");
        let ArtistItemList = this.props.searchResults.artists.map((song, index) => {
            return (
                <ArtistListItem {...song} key={index}/>
            );
        });
        let AlbumItemList = this.props.searchResults.albums.map((song, index) => {
            return (
                <AlbumListItem {...song} key={index}/>
            );
        });
        let SongItemList = this.props.searchResults.songs.map((song, index) => {
            return (
                <SongListItem {...song} key={index}/>
            );
        });
        return (
            <div>
                <h3>Search Results</h3>
                <Divider />
                <div style={{textAlign:"left",padding:"20px"}}>
                    <div className="artist-results">
                        <h4>Artists</h4>
                        {ArtistItemList}
                    </div>
                    <Divider />
                    <div className="artist-results">
                        <h4>Albums</h4>
                        {AlbumItemList}
                    </div>
                    <Divider />
                    <div className="artist-results">
                        <h4>Songs</h4>   
                        {SongItemList} 
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({searchResults: state.searchResults}),
    {fetchDefault}
)(SearchResults)


// export default class SearchResults extends Component {    

//     render() {
//         console.log("rendering results");
//         let SongItemList = this.props.results.map((song, index) => {
//             return (
//                 <SongListItem {...song} key={index}/>
//             );
//         });        
//         return (
//             <div>
//                 <h3>Search Results</h3>
//                 <Divider />
//                 <div style={{textAlign:"left",padding:"20px"}}>
//                     <div className="artist-results">
//                         <h4>Artists</h4>
//                     </div>
//                     <Divider />
//                     <div className="artist-results">
//                         <h4>Albums</h4>
//                     </div>
//                     <Divider />
//                     <div className="artist-results">
//                         <h4>Songs</h4>   
//                         {SongItemList}     
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }