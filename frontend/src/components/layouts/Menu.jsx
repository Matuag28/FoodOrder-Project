import { useEffect } from 'react';
import Fooditem from './Fooditem';
import { useDispatch, useSelector } from 'react-redux';
import { getMenus } from '../../actions/menuAction';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Message from './Message';

function Menu(){
    const dispatch =useDispatch();
    const{id} = useParams();

    const {menus,loading,error}=useSelector((state)=>state.menus);
    useEffect(() =>{
        dispatch(getMenus(id));
    },[dispatch,id]);
    return( 
    <div>
        {loading?(
            <Loader/>
        ):error?(
        <Message variant="danger">{error}</Message>
    ):menus &&menus.length>0?(
        menus.map((menu)=>(
            <div key={menu._id}>
                <h2>{menu.category}</h2>
                <hr/>
                {menu.items && menu.items.length>0?(
                    <div className='row'>
                        {menu.items.map((fooditem)=>(
                            <Fooditem 
                            key={fooditem._id} 
                            fooditem={fooditem}
                             restaurant={id}
                             />
                        ))}
                        </div>
                ):(
                <Message variant="info">No FoodItem Found</Message>
                )}
        
           
    </div>
        ))
    ):(
    <Message variant="info">No Menus Found</Message>
      )}
      </div>
    );
}
export default Menu;
