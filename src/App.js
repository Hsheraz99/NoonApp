import './App.css';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import { yellow } from '@mui/material/colors';
// import { margin } from '@mui/system';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '50%',
    backgroundColor:"white",
    marginRight:"190px",

  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'yellow' , color:"black"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0 }}
          >
            <div> <img src='https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg'></img> </div>
          </IconButton>
          <Typography
            variant="p"
            
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            
          >
            Deliver  to <br/>  Dubai
          
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Typography
            variant="p"
            noWrap
            component="div"
            
          >
            العربية

| Sign In
|
Cart
          </Typography>
        </Toolbar>
        <div style={{backgroundColor:"white"}}>
          <ul style={{listStyleType:"none" , display:"flex" , }}>
            <li >All Categories</li>
            <li>ELECTORNIC</li>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>HOME</li>
            <li>BEAUTY FRAGRANCE</li>
            <li>BABY TOYS</li>
            <li>GROCERY</li>
            <li>SPORTS</li>
            <li>BESTSELLER</li>
            <li>SELL ON NOON</li>
        </ul></div>
      </AppBar>
      <img src='https://k.nooncdn.com/cms/pages/20220409/05b73fea272435d63ffd1f14e5c2fb7a/en_dk-toggle.png' 
       style={{width:"100%"}}></img>
       <img style={{width:"100%"}} src="https://k.nooncdn.com/mpcms/EN0001/assets/bc55fdac-6d57-4d33-86d8-b9d1887b81d8.png"  alt="" />
       <ul class="cardsImgOne" style={{listStyleType:"none" , display:"flex" , }}>
         <li><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" alt="" /></li>
         <li><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png" alt="" /></li>
         <li><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" alt="" /></li>
         <li><img src="https://k.nooncdn.com/cms/pages/20220515/bc277caaf5cd219f84cfccc8ace63653/en_mb_uae-cat-04.png" alt="" /></li>
         <li><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-22.png" alt="" /></li>
         <li><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-01.png" alt="" /></li>
         <li><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-23.png" alt="" /></li>
         <li><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-27.png" alt="" /></li>
         <li><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-03.png" alt="" /></li>
       </ul>
       <h1>Recommended for you</h1>
       <Grid container spacing={2}>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          T500 Bluetooth Full
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Touch Call Smartwatch <br/> <span> <b> AED </b></span><br/> <span> Arrives<b> Wed , May 18 </b></span>  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>       
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          T500 Bluetooth Full
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Touch Call Smartwatch <br/> <span> <b> AED </b></span><br/> <span> Arrives<b> Wed , May 18 </b></span>  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          T500 Bluetooth Full
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Touch Call Smartwatch <br/> <span> <b> AED </b></span><br/> <span> Arrives<b> Wed , May 18 </b></span>  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          T500 Bluetooth Full
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Touch Call Smartwatch <br/> <span> <b> AED </b></span><br/> <span> Arrives<b> Wed , May 18 </b></span>  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
      </Grid>
    </Box>
    
  );
}



// export default function ActionAreaCard() {
//   return (
    
//   );
// }

// function App() {
//   return (
//     <div className="App">


//     </div>
//   );
// }

// export default App;
