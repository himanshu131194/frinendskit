import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';

const imageList = [];
const api = {
    baseUrl: '/api/memes-list',
};

class Posts extends Component {
    counter = 0;
    defaultLimit = 3;
    defaultSkip = 3;
    constructor(props) {
        super(props);
        
        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            offset : 0,
        };
    }

    async loadItems(page) {
        var self = this;
        let baseUrl = "https://feelfunny.net";
        var url = `${baseUrl}/api/list-posts`;

        if(this.props.onSectionSelect!==this.state.section){
            await this.setState({ tracks : []});
            this.counter = 0;
        }
        
        qwest.post(url, {
                limit: this.defaultLimit,
                offset : this.counter
            }, {
                cache: true
            })
            .then((xhr, resp)=>{
                resp = resp.data;
                if(resp) {
                    var tracks = self.state.tracks;
                    this.counter = this.counter + this.defaultSkip;
                    resp.map((track) => {
                        tracks.push(track);
                    });
                    self.setState({
                            hasMoreItems: true
                    });
                }
            });
    }

    render() {
        const loader = <div className="photo txt-center mr-auto"><div className="loader inline-block"></div></div>;
        var items = [];
        this.state.tracks.map((result, i) => {
            items.push(
                    <article key={result._id} className="post photo">
                        <figure>
                            <div className="photo-wrapper">
                                <figcaption>
                                <p className="m-0 uppercase"><b>{result.title}</b></p>
                                </figcaption>
                                <img src={result.url}/>
                            </div>
                        </figure>
                        <footer className="post-footer">
                        </footer>
                    </article>
            );
        });

        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}>
                {items}
            </InfiniteScroll>
        );
    }
};

export default Posts;