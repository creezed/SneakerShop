import Text from "../../ui/text/Text";
import { Checkbox } from "../../ui/checkbox/Checkbox";
import styled from "styled-components";
import Button from "../../ui/button/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import useCheckboxes from "../../hook/useCheckboxes";

const Filter = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 34px;
  min-width: 100%;
  padding: 30px;
  background-color: #fff;
  max-height: 600px;
  border-radius: 40px;
  border: 1px solid #F3F3F3;
  box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
`

const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const FilterContentItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 250px;
`


const ProductFilter = () => {
    // const sizes = useSelector(state => state.filter.sizes)

    const [ hidden, setHidden ] = useState(true)

    const fakeSize = [
        {name: '20', id:1},
        {name: '21', id:2},
        {name: '22', id:3},
    ]


    const [sizes, setSizes] = useCheckboxes(fakeSize)

    console.log(sizes)

    return (
        <Filter>
            <FilterContent>
                <Text as='span' typography='s'>Пол</Text>
                <FilterContentItems>
                    <Checkbox value='men' gap='12px' label="Мужской"/>
                    <Checkbox value='women' gap='12px' label="Женский"/>
                </FilterContentItems>
            </FilterContent>
            <FilterContent>
                <Text as='span' typography='s'>Размер</Text>
                <FilterContentItems>
                    {sizes.map((item, index) => {
                        return <Checkbox
                            key={ item.id }
                            value={ item.name }
                            gap='12px'
                            label={ item.name }
                            checked={ item.checked }
                            onChange={(e) => setSizes(index, e.target.checked)}
                        />
                    })}
                </FilterContentItems>
                <Text onClick={() => setHidden(!hidden)} as='span' typography='xs' weight='regular'>{hidden ? 'Посмотреть всё' : 'Свернуть'}</Text>
            </FilterContent>
            <Button variant="fill" size='s' BtnWidth='max' borderR='20px'>Применить</Button>
        </Filter>
    );
};

export default ProductFilter;
