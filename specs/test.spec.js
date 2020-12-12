import TestComponent from '@/test'
import List from '@/list'
import { mount } from '@vue/test-utils'

test('first-spec', () => {
    const wrapper = mount(TestComponent, {
        propsData: {
            value: 'VueSchool',
        },
    });
    expect(wrapper).toMatchSnapshot();

});


test('ListComponent', () => {
    const wrapper = mount(List);
    const movies = wrapper.vm.marvelMovies;
    wrapper.setData({ marvelMovies: [...movies, 'Endgame'] });
    wrapper.vm.$nextTick().then(() => {
        expect(wrapper).toMatchSnapshot();
    });
});