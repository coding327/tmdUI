# Card
卡片组件

### 示例
<card imgSrc="tmdUI/java.png" summary="剑指Java面试-Offer直通车 百度资深面试官授课"></card>

### 代码
```html
<card imgSrc="/java.png" summary="剑指Java面试-Offer直通车 百度资深面试官授课"></card>
```

## Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | --- | --- |   ---   |  ---  |
| width | 卡片的宽度 | Number | false | - |
| imgSrc | 图片资源地址 | String | true | - |
| imgHeight | 图片高度 | Number | false | - |
| Summary | 卡片概要 | String/Slot | false | - |
| footer | 卡片底部 | Slot | false | - |