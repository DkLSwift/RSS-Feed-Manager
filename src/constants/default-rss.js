import NewsIdentity from '../models/newsIdentity'

export const defaultRSS = [
    new NewsIdentity("BreakingNews", 'https://feeds.breakingnews.ie/bnworld'),
    new NewsIdentity("Game Informer",  'https://www.gameinformer.com/rss.xml'),
    new NewsIdentity("ABC News", 'http://abcnews.go.com/abcnews/internationalheadlines'),
    new NewsIdentity("CBS News", 'https://www.cbsnews.com/latest/rss/world'),
    new NewsIdentity("CNET Technology News", 'https://www.cnet.com/rss/news/'),
]

export const discoverRSS = [
    { 
        category: "World News", 
        data: [
            {
                title: "World News",
                source: "BBC News",
                url: "http://feeds.bbci.co.uk/news/world/rss.xml"
            },
            {
                title: "World News",
                source: "Washington Post",
                url: "http://feeds.washingtonpost.com/rss/world"
            },
            {
                title: "World News",
                source: "The New York Times",
                url: "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/world/rss.xml"
            },
            {
                title: "World News",
                source: "Al Jazeera",
                url: "http://www.aljazeera.com/xml/rss/all.xml"
            },
            {
                title: "World News",
                source: "CNBC",
                url: "https://www.cnbc.com/id/100727362/device/rss/rss.html"
            },
            {
                title: "World News",
                source: "Euronews International",
                url: "https://www.euronews.com/rss?level=theme&name=news"
            },
            {
                title: "World News",
                source: "France 24",
                url: "https://www.france24.com/en/rss"
            },
            {
                title: "World News",
                source: "Vox World",
                url: "https://www.vox.com/rss/world/index.xml"
            },
            {
                title: "World News",
                source: "BreakingNews",
                url: "https://feeds.breakingnews.ie/bnworld"
            },
        ],
    },
    {
        category: "Science" ,
        data: [
            {
                title: "Science",
                source: "Science News Magazine",
                url: "https://www.sciencenews.org/feed"
            },
            // {
            //     title: "Science",
            //     source: "ScienceDaily",
            //     url: "https://www.sciencedaily.com/rss/"
            // },
            {
                title: "Science",
                source: "New Scientist Magazine",
                url: "https://www.newscientist.com/feed/home/?cmpid=RSS%7CNSNS-Home"
            },
            {
                title: "Science",
                source: "Live Science: Articles, Mysteries & Discoveries",
                url: "https://www.livescience.com/home/feed/site.xml"
            },
            {
                title: "Science",
                source: "Phys.org",
                url: "https://phys.org/rss-feed"
            },
            {
                title: "Science",
                source: "Advanced Science News",
                url: "https://www.advancedsciencenews.com/feed/"
            },
        ]
    },
    {
        category: "Technology",
        data: [
            {
                title: "Technology",
                source: "Techmeme",
                url: "https://www.techmeme.com/feed.xml?x=1"
            },
            {
                title: "Technology",
                source: "TechCrunch Startup and Technology",
                url: "https://feeds.feedburner.com/TechCrunch/"
            },
            {
                title: "Technology",
                source: "MIT Technology Review",
                url: "https://www.technologyreview.com/topnews.rss"
            },
            {
                title: "Technology",
                source: "Technology Lab",
                url: "http://feeds.arstechnica.com/arstechnica/technology-lab"
            },
            {
                title: "Technology",
                source: "CNET Technology News",
                url: "https://www.cnet.com/rss/news/"
            },
            {
                title: "Technology",
                source: "Frandroid",
                url: "https://www.frandroid.com/feed"
            },
        ]
    },
    {
        category: "Swoftware Development",
        data: [
            // {
            //     title: "Swoftware Development",
            //     source: "Google Developers Blog",
            //     url: "http://feeds.feedburner.com/GDBcode"
            // },
            {
                title: "Swoftware Development",
                source: "ProgrammableWeb",
                url: "http://feeds.feedburner.com/ProgrammableWeb"
            },
            {
                title: "Swoftware Development",
                source: "Good Coders Code, Great Reuse",
                url: "http://feeds.feedburner.com/catonmat"
            },
            {
                title: "Swoftware Development",
                source: "Treehouse Blog",
                url: "http://blog.teamtreehouse.com/feed"
            },
            {
                title: "Swoftware Development",
                source: "Developer Tech",
                url: "https://www.developer-tech.com/feed/"
            },
            
        ]
    },
    {
        category: "Video Games",
        data: [
            {
                title: "Video Games",
                source: "IGN",
                url: "http://feeds.ign.com/ign/games-all"
            },
            {
                title: "Video Games",
                source: "Xbox Wire",
                url: "https://news.xbox.com/en-us/feed/"
            },
            {
                title: "Video Games",
                source: "Official PlayStation Blog",
                url: "https://blog.us.playstation.com/feed/"
            },
            {
                title: "Video Games",
                source: "PC Gamer Magazine",
                url: "https://www.pcgamer.com/rss/"
            },
            {
                title: "Video Games",
                source: "Kotaku",
                url: "https://kotaku.com/rss"
            },
        ]
    },
    {
        category: "Sport",
        data: [
            {
                title: "Sport",
                source: "Sporting News",
                url: "http://www.sportingnews.com/us/rss"
            },
            {
                title: "Sport",
                source: "Sky Sports",
                url: "https://www.skysports.com/rss/12040"
            },
            {
                title: "Sport",
                source: "Deadsping",
                url: "https://deadspin.com/rss"
            },
            {
                title: "Sport",
                source: "FoorballCritic",
                url: "https://www.footballcritic.com/rss/"
            },
        ]
    },
    {
        category: "Eco Friendly",
        data: [
            {
                title: "Eco Friendly",
                source: "Earth911 More Ideas, Less Waste",
                url: "http://earth911.com/feed/"
            },
            {
                title: "Eco Friendly",
                source: "Ecocult",
                url: "http://ecocult.com/feed/"
            },
            {
                title: "Eco Friendly",
                source: "Biome Stores",
                url: "https://www.biome.com.au/blog/feed/"
            },
            {
                title: "Eco Friendly",
                source: "Renewable Energy",
                url: "http://feeds.feedburner.com/RenewableEnergyNewsRssFeed"
            },
            {
                title: "Eco Friendly",
                source: "Clean Technica Solar, Wind, EV News",
                url: "https://cleantechnica.com/feed/"
            },
            {
                title: "Eco Friendly",
                source: "GreenBizz",
                url: "https://www.greenbiz.com/rss.xml"
            },
            {
                title: "Eco Friendly",
                source: "The Carbon Brief",
                url: "http://www.carbonbrief.org/rss"
            },
        ]
    },
    {
        category: "Military",
        data: [
            {
                title: "Military",
                source: "Mamouth",
                url: "http://feeds.feedburner.com/ZoneMilitaire"
            },
            // {
            //     title: "Military",
            //     source: "Defence Blog",
            //     url: "https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=4624447&q=site:http%3A%2F%2Fdefence-blog.com%2Ffeed"
            // },
            {
                title: "Military",
                source: "GOV.UK Ministry of Defence",
                url: "https://www.gov.uk/government/organisations/ministry-of-defence.atom"
            },
            {
                title: "Military",
                source: "Daily Press U.S. Military News",
                url: "https://www.dailypress.com/arcio/rss/category/military/?sort=display_date:desc"
            },
            {
                title: "Military",
                source: "Army Technology",
                url: "https://www.army-technology.com/feed/"
            },
            {
                title: "Military",
                source: "China Military",
                url: "http://english.chinamil.com.cn/rss.xml"
            },
        ]
    },
    
]