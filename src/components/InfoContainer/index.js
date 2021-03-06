/*
 * @Author: ShenLing
 * @Date: 2020-09-18 11:07:59
 * @LastEditors: Shenling
 * @LastEditTime: 2020-11-04 10:45:54
 */
import React from 'react'
import { Button } from '@alifd/next'
import IconFont from '../IconFont'
import Styles from './index.scss'
import classNames from 'classnames/bind'
var cx = classNames.bind(Styles)

export default class InfoContainer extends React.Component {
  state = {
    visible: true
  }

  render() {
    const { title, id, style, showVisibleChangeBtn } = this.props

    return (
      <div className={cx('info_container_border')} id={id} style={style || {}}>
        <div className={cx('info_container_title')}>
          {showVisibleChangeBtn ? (
            <Button
              text
              type='primary'
              onClick={() => {
                this.setState({ visible: !this.state.visible })
              }}
              className={cx('show_visible_btn')}
            >
              {this.state.visible ? (
                <IconFont type='iconshouqi' size='small' />
              ) : (
                <IconFont type='iconzhankai' size='small' />
              )}
            </Button>
          ) : null}
          {title}
        </div>
        <div className={cx('info_container_content')}>
          {this.state.visible ? this.props.children : null}
        </div>
      </div>
    )
  }
}
