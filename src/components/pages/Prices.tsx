import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from './Prices.module.css';

type Props = {};
export const Prices = (props: Props) => {
	let [searchParams, setSearchParams] = useSearchParams();
    const sneakers = [
        {
            manufacturer: "Adidas",
            name: "Adidas Yeezy Boost 350",
            price: 300,
            onSale: false
        },
        {
            manufacturer: "Adidas",
            name: "Adidas Ultraboost 21",
            price: 180,
            onSale: true
        },
        {
            manufacturer: "Puma",
            name: "Puma Suede Classic",
            price: 65,
            onSale: true
        },
        {
            manufacturer: "Puma",
            name: "Puma RS-X",
            price: 110,
            onSale: false
        },
        {
            manufacturer: "Abibas",
            name: "Abibas Alphabounce",
            price: 60,
            onSale: true
        }
    ];

    const [filteredSneakers, setFilteredSneakers] = useState(sneakers);

    function handleOnSale() {
		
		setSearchParams({onSale: 'true'})
		// filterSneakers()
		  
    }

    function handleReset() {
		setSearchParams({})
		// filterSneakers()
	
    }

	// console.log(searchParams.get('onSale'));
	// const filterSneakers = useCallback(() => {
	// 	if (searchParams.get('onSale')=== 'true') {
	// 	return setFilteredSneakers(sneakers.filter(el=> el.onSale === true))
	// 	} else {
	// 		return setFilteredSneakers(sneakers)
	// 	}
	// }, [searchParams])
	useEffect(()=> {
		if (searchParams.get('onSale')=== 'true') {
			setFilteredSneakers(sneakers.filter(el=> el.onSale === true))
		} else {
			setFilteredSneakers(sneakers)
		}
	}, [searchParams])
	
	

	
    return (
        <div>
            <button onClick={handleOnSale} className={styles.buttonStyle}>On sale</button>
            <button onClick={handleReset} className={styles.buttonStyle}>Reset filter</button>

            <table className={styles.tableStyle}>
                <thead>
                <tr>
                    <th className={styles.thStyle}>Manufacturer</th>
                    <th className={styles.thStyle}>Name</th>
                    <th className={styles.thStyle}>Price</th>
                    <th className={styles.thStyle}>On Sale</th>
                </tr>
                </thead>
                <tbody>
                {filteredSneakers.map((sneaker, index) => (
                    <tr key={index}>
                        <td className={styles.tdStyle}>{sneaker.manufacturer}</td>
                        <td className={styles.tdStyle}>{sneaker.name}</td>
                        <td className={styles.tdStyle}>${sneaker.price}</td>
                        <td className={styles.tdStyle}>{sneaker.onSale ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};