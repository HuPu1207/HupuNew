<!--
 * @Author: CoolWind
 * @Date: 2019-12-02 14:43:28
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-03 09:39:30
 * @Description: 
 -->
<template>
    <div class="subject">
        <SubjectTitle :id="id"></SubjectTitle>
        <SubjectComment :id="id"></SubjectComment>
    </div>
</template>

<script>
import SubjectTitle from '../components/SubjectTitle';
import SubjectComment from '../components/SubjectComment';

export default {
    name: 'SubjectPage',
    props: ['id'],
    data() {
        return {
            
        }
    },
    components: {
        SubjectTitle,SubjectComment
    }
}
</script>

<style lang="scss" scoped>

</style>